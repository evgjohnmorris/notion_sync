/**
 * Generated Tool: searchTool_0521
 * Domain: Search
 * ID: 0521
 */
exports.searchTool_0521 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0521:', error);
    throw error;
  }
};
