/**
 * Generated Tool: databasesTool_0359
 * Domain: Databases
 * ID: 0359
 */
exports.databasesTool_0359 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0359:', error);
    throw error;
  }
};
