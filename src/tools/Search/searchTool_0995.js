/**
 * Generated Tool: searchTool_0995
 * Domain: Search
 * ID: 0995
 */
exports.searchTool_0995 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0995:', error);
    throw error;
  }
};
