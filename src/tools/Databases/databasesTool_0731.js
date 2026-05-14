/**
 * Generated Tool: databasesTool_0731
 * Domain: Databases
 * ID: 0731
 */
exports.databasesTool_0731 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0731:', error);
    throw error;
  }
};
