/**
 * Generated Tool: searchTool_0574
 * Domain: Search
 * ID: 0574
 */
exports.searchTool_0574 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0574:', error);
    throw error;
  }
};
