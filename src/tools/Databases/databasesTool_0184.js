/**
 * Generated Tool: databasesTool_0184
 * Domain: Databases
 * ID: 0184
 */
exports.databasesTool_0184 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0184:', error);
    throw error;
  }
};
