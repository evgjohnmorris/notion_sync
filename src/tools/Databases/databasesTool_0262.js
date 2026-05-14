/**
 * Generated Tool: databasesTool_0262
 * Domain: Databases
 * ID: 0262
 */
exports.databasesTool_0262 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0262:', error);
    throw error;
  }
};
