/**
 * Generated Tool: searchTool_0737
 * Domain: Search
 * ID: 0737
 */
exports.searchTool_0737 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0737:', error);
    throw error;
  }
};
