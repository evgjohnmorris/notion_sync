/**
 * Generated Tool: searchTool_0531
 * Domain: Search
 * ID: 0531
 */
exports.searchTool_0531 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0531:', error);
    throw error;
  }
};
