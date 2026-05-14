/**
 * Generated Tool: searchTool_0190
 * Domain: Search
 * ID: 0190
 */
exports.searchTool_0190 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0190:', error);
    throw error;
  }
};
