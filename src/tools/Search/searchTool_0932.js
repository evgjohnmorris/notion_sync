/**
 * Generated Tool: searchTool_0932
 * Domain: Search
 * ID: 0932
 */
exports.searchTool_0932 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0932:', error);
    throw error;
  }
};
