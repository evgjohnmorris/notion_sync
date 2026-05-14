/**
 * Generated Tool: searchTool_0946
 * Domain: Search
 * ID: 0946
 */
exports.searchTool_0946 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0946:', error);
    throw error;
  }
};
