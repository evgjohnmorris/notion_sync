/**
 * Generated Tool: searchTool_0356
 * Domain: Search
 * ID: 0356
 */
exports.searchTool_0356 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0356:', error);
    throw error;
  }
};
