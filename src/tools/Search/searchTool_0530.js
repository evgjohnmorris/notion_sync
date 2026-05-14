/**
 * Generated Tool: searchTool_0530
 * Domain: Search
 * ID: 0530
 */
exports.searchTool_0530 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0530:', error);
    throw error;
  }
};
