/**
 * Generated Tool: searchTool_0359
 * Domain: Search
 * ID: 0359
 */
exports.searchTool_0359 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0359:', error);
    throw error;
  }
};
