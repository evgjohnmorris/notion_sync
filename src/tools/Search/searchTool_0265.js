/**
 * Generated Tool: searchTool_0265
 * Domain: Search
 * ID: 0265
 */
exports.searchTool_0265 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0265:', error);
    throw error;
  }
};
