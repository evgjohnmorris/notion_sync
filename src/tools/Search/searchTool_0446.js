/**
 * Generated Tool: searchTool_0446
 * Domain: Search
 * ID: 0446
 */
exports.searchTool_0446 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0446:', error);
    throw error;
  }
};
