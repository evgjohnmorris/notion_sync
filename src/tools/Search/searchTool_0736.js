/**
 * Generated Tool: searchTool_0736
 * Domain: Search
 * ID: 0736
 */
exports.searchTool_0736 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0736:', error);
    throw error;
  }
};
