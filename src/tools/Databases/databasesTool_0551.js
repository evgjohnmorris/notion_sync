/**
 * Generated Tool: databasesTool_0551
 * Domain: Databases
 * ID: 0551
 */
exports.databasesTool_0551 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0551:', error);
    throw error;
  }
};
