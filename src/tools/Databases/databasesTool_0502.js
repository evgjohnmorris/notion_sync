/**
 * Generated Tool: databasesTool_0502
 * Domain: Databases
 * ID: 0502
 */
exports.databasesTool_0502 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0502:', error);
    throw error;
  }
};
