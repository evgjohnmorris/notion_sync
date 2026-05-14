/**
 * Generated Tool: searchTool_0577
 * Domain: Search
 * ID: 0577
 */
exports.searchTool_0577 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0577:', error);
    throw error;
  }
};
