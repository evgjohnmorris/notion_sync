/**
 * Generated Tool: databasesTool_0449
 * Domain: Databases
 * ID: 0449
 */
exports.databasesTool_0449 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0449:', error);
    throw error;
  }
};
