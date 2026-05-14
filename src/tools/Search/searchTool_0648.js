/**
 * Generated Tool: searchTool_0648
 * Domain: Search
 * ID: 0648
 */
exports.searchTool_0648 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0648:', error);
    throw error;
  }
};
