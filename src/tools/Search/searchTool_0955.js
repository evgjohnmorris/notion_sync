/**
 * Generated Tool: searchTool_0955
 * Domain: Search
 * ID: 0955
 */
exports.searchTool_0955 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0955:', error);
    throw error;
  }
};
