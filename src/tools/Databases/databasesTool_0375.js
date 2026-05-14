/**
 * Generated Tool: databasesTool_0375
 * Domain: Databases
 * ID: 0375
 */
exports.databasesTool_0375 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0375:', error);
    throw error;
  }
};
