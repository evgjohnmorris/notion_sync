/**
 * Generated Tool: searchTool_0517
 * Domain: Search
 * ID: 0517
 */
exports.searchTool_0517 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0517:', error);
    throw error;
  }
};
