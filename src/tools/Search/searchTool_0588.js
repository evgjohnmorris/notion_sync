/**
 * Generated Tool: searchTool_0588
 * Domain: Search
 * ID: 0588
 */
exports.searchTool_0588 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0588:', error);
    throw error;
  }
};
