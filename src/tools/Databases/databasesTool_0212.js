/**
 * Generated Tool: databasesTool_0212
 * Domain: Databases
 * ID: 0212
 */
exports.databasesTool_0212 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0212:', error);
    throw error;
  }
};
