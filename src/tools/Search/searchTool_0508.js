/**
 * Generated Tool: searchTool_0508
 * Domain: Search
 * ID: 0508
 */
exports.searchTool_0508 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0508:', error);
    throw error;
  }
};
