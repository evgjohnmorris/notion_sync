/**
 * Generated Tool: searchTool_0914
 * Domain: Search
 * ID: 0914
 */
exports.searchTool_0914 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0914:', error);
    throw error;
  }
};
