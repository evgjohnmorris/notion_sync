/**
 * Generated Tool: databasesTool_0732
 * Domain: Databases
 * ID: 0732
 */
exports.databasesTool_0732 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0732:', error);
    throw error;
  }
};
