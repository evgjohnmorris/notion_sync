/**
 * Generated Tool: databasesTool_0636
 * Domain: Databases
 * ID: 0636
 */
exports.databasesTool_0636 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0636:', error);
    throw error;
  }
};
