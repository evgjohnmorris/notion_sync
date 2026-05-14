/**
 * Generated Tool: searchTool_0786
 * Domain: Search
 * ID: 0786
 */
exports.searchTool_0786 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0786:', error);
    throw error;
  }
};
