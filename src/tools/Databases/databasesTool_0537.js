/**
 * Generated Tool: databasesTool_0537
 * Domain: Databases
 * ID: 0537
 */
exports.databasesTool_0537 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0537:', error);
    throw error;
  }
};
