/**
 * Generated Tool: searchTool_0329
 * Domain: Search
 * ID: 0329
 */
exports.searchTool_0329 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0329:', error);
    throw error;
  }
};
