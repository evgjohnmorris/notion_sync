/**
 * Generated Tool: searchTool_0940
 * Domain: Search
 * ID: 0940
 */
exports.searchTool_0940 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0940:', error);
    throw error;
  }
};
