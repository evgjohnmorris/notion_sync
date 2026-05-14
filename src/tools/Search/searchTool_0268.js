/**
 * Generated Tool: searchTool_0268
 * Domain: Search
 * ID: 0268
 */
exports.searchTool_0268 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0268:', error);
    throw error;
  }
};
