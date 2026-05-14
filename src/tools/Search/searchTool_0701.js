/**
 * Generated Tool: searchTool_0701
 * Domain: Search
 * ID: 0701
 */
exports.searchTool_0701 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0701:', error);
    throw error;
  }
};
