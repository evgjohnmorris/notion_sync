/**
 * Generated Tool: searchTool_0562
 * Domain: Search
 * ID: 0562
 */
exports.searchTool_0562 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0562:', error);
    throw error;
  }
};
