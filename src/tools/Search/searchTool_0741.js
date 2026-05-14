/**
 * Generated Tool: searchTool_0741
 * Domain: Search
 * ID: 0741
 */
exports.searchTool_0741 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0741:', error);
    throw error;
  }
};
