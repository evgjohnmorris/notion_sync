/**
 * Generated Tool: searchTool_0409
 * Domain: Search
 * ID: 0409
 */
exports.searchTool_0409 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0409:', error);
    throw error;
  }
};
