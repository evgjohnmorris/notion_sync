/**
 * Generated Tool: databasesTool_0023
 * Domain: Databases
 * ID: 0023
 */
exports.databasesTool_0023 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0023:', error);
    throw error;
  }
};
