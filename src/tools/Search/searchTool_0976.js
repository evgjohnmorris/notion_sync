/**
 * Generated Tool: searchTool_0976
 * Domain: Search
 * ID: 0976
 */
exports.searchTool_0976 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0976:', error);
    throw error;
  }
};
