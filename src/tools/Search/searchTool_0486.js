/**
 * Generated Tool: searchTool_0486
 * Domain: Search
 * ID: 0486
 */
exports.searchTool_0486 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0486:', error);
    throw error;
  }
};
