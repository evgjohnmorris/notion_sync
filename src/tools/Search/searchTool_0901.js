/**
 * Generated Tool: searchTool_0901
 * Domain: Search
 * ID: 0901
 */
exports.searchTool_0901 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0901:', error);
    throw error;
  }
};
