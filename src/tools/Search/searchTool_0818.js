/**
 * Generated Tool: searchTool_0818
 * Domain: Search
 * ID: 0818
 */
exports.searchTool_0818 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0818:', error);
    throw error;
  }
};
