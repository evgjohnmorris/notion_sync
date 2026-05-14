/**
 * Generated Tool: searchTool_0203
 * Domain: Search
 * ID: 0203
 */
exports.searchTool_0203 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0203:', error);
    throw error;
  }
};
