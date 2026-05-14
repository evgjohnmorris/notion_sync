/**
 * Generated Tool: databasesTool_0446
 * Domain: Databases
 * ID: 0446
 */
exports.databasesTool_0446 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0446:', error);
    throw error;
  }
};
