/**
 * Generated Tool: searchTool_0449
 * Domain: Search
 * ID: 0449
 */
exports.searchTool_0449 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0449:', error);
    throw error;
  }
};
