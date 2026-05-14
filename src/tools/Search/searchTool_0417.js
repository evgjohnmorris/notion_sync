/**
 * Generated Tool: searchTool_0417
 * Domain: Search
 * ID: 0417
 */
exports.searchTool_0417 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0417:', error);
    throw error;
  }
};
