/**
 * Generated Tool: databasesTool_0356
 * Domain: Databases
 * ID: 0356
 */
exports.databasesTool_0356 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0356:', error);
    throw error;
  }
};
