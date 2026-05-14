/**
 * Generated Tool: searchTool_0992
 * Domain: Search
 * ID: 0992
 */
exports.searchTool_0992 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0992:', error);
    throw error;
  }
};
