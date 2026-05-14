/**
 * Generated Tool: searchTool_0603
 * Domain: Search
 * ID: 0603
 */
exports.searchTool_0603 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0603:', error);
    throw error;
  }
};
