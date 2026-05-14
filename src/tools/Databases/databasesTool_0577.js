/**
 * Generated Tool: databasesTool_0577
 * Domain: Databases
 * ID: 0577
 */
exports.databasesTool_0577 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0577:', error);
    throw error;
  }
};
